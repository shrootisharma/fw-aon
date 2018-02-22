
var fb = {}

fb.config = function() {

    // Enter config values from the FIREBASE console: Authentication Web Setup Popup window.

    var config = {
        apiKey: "••••",
        authDomain: "••••",
        databaseURL: "••••",
        projectId: "••••",
        storageBucket: "••••",
        messagingSenderId: "••••"
    };

    function init() {
        firebase.initializeApp(config);
        fb.auth.signIn();
    }

    function getDb() {
        return firebase.database();
    }

    return {
        init : init,
        getDb : getDb
    }

} () ;

fb.auth = function() {

    function signIn() {

        var auth = firebase.auth();
        var provider = new firebase.auth.GoogleAuthProvider();

        auth.onAuthStateChanged( function( user ) {
            if( user != null ) {
                fb.view.drawUser( user.displayName , user.photoURL );
                fb.database.getPies();
            }
        }) ;

        auth.signInWithPopup(provider)
    }

    return {
        signIn : signIn
    }

} () ;

fb.database = function() {

    var piesRef = "/southwold/pies";

    function getPies() {

        fb.config.getDb().ref( piesRef ).on('value', function(snapshot) {

            var pies = [];
            snapshot.forEach( function( o ) {
                pies.push( o.val())
                console.log( o.key, o.val());
            })

            fb.view.draw( pies );
        })
    }

    function addPie( p ) {

        fb.config.getDb().ref( piesRef ).push( p )
        .then(
            function() {
                // console.log( "Pie added" );
            },
            function( error ) {
                console.log( error );
            })
    }

    function empty() {
        fb.config.getDb().ref( piesRef ).remove()
    }

    return {
        getPies:getPies,
        addPie:addPie,
        empty: empty
    }

} ()

fb.view = function() {

    var authMessage = "Authenticated User ";

    function drawUser( name, photo ) {
        $(".user p").text( authMessage + name );
        $(".user img").attr("src" , photo );
    }

    function draw( pies ) {

    	$(".pies").empty();
    	pies.forEach( function( p ) {
    		$("<section>" , { class:"pie" , text:p }).appendTo(".pies")
    	})
    }

    function addInteractivity() {

        $( "#addPie" ).submit( function(e) {
        	e.preventDefault();
        	var name = $("#pieName").val();
            if( name.length ) {
                fb.database.addPie( name );
            }
            $("#pieName").val("");
        })

        $(".empty").on( "click" , function() {
            fb.database.empty()
        })
    }

    addInteractivity();

    return {
        drawUser : drawUser,
        draw : draw
    }

} ()

// fb.config.init();

if( window.location.href.includes("file:")) {
    console.log( "FIREBASE needs to run this page from an HTTP webserver" );
}
