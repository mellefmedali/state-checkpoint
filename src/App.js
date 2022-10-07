import React from "react";

class App extends React.Component {
    state = {
        fullName: "Mohamed Ali Mellef",
        bio: "a Gomycode student",
        imgSrc: "./logo.bmp",
        profession: "mechanical engineering",
        isShown: false,
        delay: 0
    }

    componentDidMount() {
        this.myInterval = setInterval(()=>{
            this.setState({
                delay: this.state.delay + 1
            })
        },1000)
    }

    render() {
        const {delay} = this.state;
        console.log("this.state.delay: ", {delay})
        const handleShow = () => {
            this.state.isShown ? (this.setState({ isShown: false })) : (this.setState({ isShown: true }));
        }

        const profile = (
            `Hi,
            I am ${this.state.fullName},
            I am ${this.state.bio},
            and I do ${this.state.profession} for living !!!`
        )
        return (
            <>
                {delay<1?(<></>):(<h1>This App component did mount since : {delay} secondes</h1>)}
                <button onClick={handleShow}>{this.state.isShown ? ("Hide") : ("Show")} Profile</button>
                {this.state.isShown ? (
                    <>
                        <div>{profile}</div>
                        <img src={this.state.imgSrc} alt="myPic" />
                    </>
                ) : (<></>)}
            </>
        )
    }
}
export default App

// OK Create a project using create-react-app.
// OK Transform the App.js into a class-based component.
// OK Implement a state for this class containing a Person ={ fullName,bio, imgSrc, profession} and a boolean shows.
// OK Add a button that toggles the show state. When the show state is true, the person's profile will appear.
// Create a field that shows the time interval since the last component was mounted using the component lifecycle.
// Hint: use the setInterval method.