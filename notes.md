npm run dev

npm i axios react-router-dom redux react-redux redux-thunk redux-devtools-extension moment react-moment

nodemon server

npm run server

npm i express express-validator bcryptjs config gravatar jsonwebtoken mongoose request

npm install -g serve

serve -s build

Beat Sequencer Example: 

constructor(props) {
    super(props);
    this.state = {
        steps: [0,0,0,0],
        currentStep: 0,
        playing: false
    }
}

handPlayPress() {
    if (!this.state.playing) {

    this.setState({
           currentStep: -1,
        playing: true
    }, () => {
        this.clock.start();
        this.tickEvent = this.clock.callbackAtTime(
            this.handleTick.bind(this),
            this.context.currentTime
        ).repeat(0.47);
    }
    })
     
     else {

         this.setState(
             { playing: false },
             () => {
                 this.clock.stop();
                 this.tickEvent.clear();
                 this.tickEvent = null;
             });
    }
}

handleTick({ deadline }) {
    const {currentStep, steps } = this.state;
    const newCurrentStep = currentStep + 1;

    if (steps[newCurrentStep % steps.length]) {
        this.triggerSound(this.context, deadline);
    }

    this.setState({ currentStep - newCurrentStep })
}

  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],