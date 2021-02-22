class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.reset = createButton('Reset');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
        this.title.html("MyQuiz")
        this.title.position(350,0)

        this.question.html("is a tomato a fruit or a vegtable?")
        this.question.position(150,80)
        this.option1.html("fruit")
        this.option1.position(150,80)
        this.option2.html("vegtable")
        this.option2.position(150,80)

        this.input1.position(150,230)
    }
  }
  