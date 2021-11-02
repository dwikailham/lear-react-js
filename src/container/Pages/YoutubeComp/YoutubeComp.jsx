import React, { Component } from "react";
import YoutubeComp from "../../../component/youtube-component/YoutubeComp";


export default class YoutubeCompPage extends Component {
  render() {
    return (
      <div>
        <p>Youtube Component</p>
        <hr />
        <YoutubeComp
          time="7.12"
          judul="Tutorial Vector Art Skyline - Part 1"
          desc="2x Ditonton, 2 hari yang lalu"
        />
        <YoutubeComp
          time="7.12"
          judul="Tutorial Vector Art Skyline - Part 2"
          desc="2x Ditonton, 2 hari yang lalu"
        />
        <YoutubeComp
          time="7.12"
          judul="Tutorial Vector Art Skyline - Part 3"
          desc="2x Ditonton, 2 hari yang lalu"
        />
        <YoutubeComp
          time="7.12"
          judul="Tutorial Vector Art Skyline - Part 4"
          desc="2x Ditonton, 2 hari yang lalu"
        />
        <YoutubeComp
          time="7.12"
          judul="Tutorial Vector Art Skyline - Part 5"
          desc="2x Ditonton, 2 hari yang lalu"
        />
      </div>
    );
  }
}
