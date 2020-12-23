import React, { Component } from "react";
import "./App.css";
import profilePic from "../src/profilePic.jpg";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: [
        {
          FullName: "Houssem eddine boukari",
          profession: " web developper",
        },
      ],
      isShow: false,
      counter: 0,
    };
  }

  showProfile = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1,
      });
    }, 1000);
  }
  displayTime = (timeSec) => {
    let h = Math.floor(timeSec / 3600);
    let m = Math.floor((timeSec - h * 3600) / 60);
    let s = timeSec - (h * 3600 + m * 60);
    return (
      <div>
        <span>
          {String(h).padStart(2, 0)}:{String(m).padStart(2, 0)}:
          {String(s).padStart(2, 0)}
        </span>
      </div>
    );
  };

  render() {
    return (
      <div className="profile">
        <div>
          <div>{this.displayTime(this.state.counter)}</div>
        </div>
        <button onClick={this.showProfile}>
          {this.state.isShow ? "Hide Profile" : "Show Profile"}
        </button>
        {this.state.isShow ? (
          <div>
            {this.state.profile.map((el, index) => (
              <div>
                <img alt="img" src={profilePic} />
                <div>
                  <section>
                    <b>{el.FullName}</b>
                  </section>
                  <section>
                    <b>{el.bio}</b>
                  </section>
                  <section>
                    <b>{el.profession}</b>
                  </section>
                </div>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
