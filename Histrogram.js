import 'antd/dist/antd.css';
import { Histogram } from '@ant-design/charts';
const Data = require('./data.json')

const Chart_H=()=>{
    var config={
        data : Data,
        binField: "Score",
        binWidth:1,
    };
    return<div>
        <Histogram{...config}/>
    </div>
}
export default Chart_H;