class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  updateVideos(video) {
    this.setState({player: video});
  }


  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.player}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.list} update={this.updateVideos.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;
