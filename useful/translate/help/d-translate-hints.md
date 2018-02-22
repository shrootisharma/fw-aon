## Angular 4 exercise : translate HINTS

- Create a new project
	
- Paste in relevant HTML and CSS

- Create a new component for each phrase.

		ng generate component enphrase
		
- Your app.component.html template 

				<section class="flex">
					<app-enphrase></app-enphrase>
				</section>
		
- Your phrase.component.html 

		<section class="panel">
		    <p class="panel-es">¿Dónde está</p>
		    <p class="panel-en">Where is</p>
		</section>

- Phrases

		this.phrases = [
			{ es : "¿Tienes?", en:"Do you have" },
			{ es : "¿Tienes?", en:"Do you have" }
		]
		
- iterate over this array.

		<app-enphrase *ngFor="let p of phrases">
		
- Define an @Input in the phrase component class.

		@Input() phrase:string;
		
- Use the Input in the main component:

				<app-enphrase [phrase]="p" ....
				
- Use the phrase object in the phrase template:

		    <p>{{ phrase.es }}</p>
		    <p>{{ phrase.en }}</p>
		    		    
#### Logic to hide/reveal phrase

		show:boolean=false;
		    
- Add a method to toggle the state:

		togglePhrase() {
        this.show = !this.show;
    }
    
- Add rollover events to trigger this method:
		
		(mouseenter)="togglePhrase()"
		(mouseleave)="togglePhrase()"


- Add an ngClass directive 

		[ngClass]="{'reveal':show}"
		
	
		