import Flux from '@4geeksacademy/react-flux-dash';
import React from "react";
import {Panel, Loading} from '../utils/react-components/index';
export default class LessonView extends Flux.View {
  
  constructor(){
    super();
    this.state = {
      loading: true
    }
  }
  
  render() {
    return (
      <Panel padding={false}>
        <Loading show={this.state.loading} />
        <iframe onLoad={()=>this.setState({loading: false})} className="assignment-iframe" src={"https://breatheco.de/en/project/?plain=true&slug="+this.props.match.params.assignment_slug} 
          height="100%" width="100%" frameBorder="0" />
      </Panel>
    );
  }
}