import {Tree} from 'antd';
import React from 'react';
import data from './Qler.json';
import './tree.css';
import 'antd/dist/antd.css';
import $ from "jquery";
import DemoLine from './Chart';
import Chart_H from './Histrogram';

const { DirectoryTree } = Tree;

class Treel extends React.Component {
    constructor(props) {
      super(props);
      this.state = {image: "",data};
    }
    onSelect = (keys, info) => {
        
      if(info.node.value){
        $(".Histro").show();
        $(".Chart").hide();
      }
      else if(info.node.OREO)
      {
        $(".Histro").hide();
        $(".Chart").show();
      }
      
    };
  
    onExpand = () => {
      console.log(process.env.REACT_APP_ROOT_PATH);
    };
    render=()=>{
      return (
        <div class="body">
             <div class="tree">
                 <DirectoryTree
                 onSelect={this.onSelect}
                 onExpand={this.onExpand}
                 treeData={this.state.data}
                 />                
             </div>
             <div class='STARWARS'>
                <div class='Histro'>
                    Histogram
                    <Chart_H/>
                </div>
                <div class='Chart'>
                  Line Chart
                    <DemoLine/>
                </div>      
             </div>
         </div>
      );
    }
  };
  
  export default Treel;