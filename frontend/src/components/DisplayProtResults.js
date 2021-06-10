import React from "react";
import axios from "axios";
import { Card, Spin, Row, Col} from 'antd';

const { Meta } = Card;


class ImageResults extends React.Component {
    state = {
        key: '',
        main:null,
        MS: null,
        SS3: null,
        LCL: null
    };

    onTabChange = (key, type) => {
        console.log(key, type);
        this.setState({ [type]: key });
    };

    componentDidMount() {
        axios
            .get("http://192.168.1.202:3334/api/site_protTrans")
            .then(res => {
                this.setState({ main: res.data.main, MS: res.data.MS, SS3: res.data.SS3, LCL: res.data.LCL})
                // var normalImages, diseasedImages;
                // normalImages = diseasedImages = [];
                // res.data.map((file, index) => {
                //     card = <Card
                //                 hoverable
                //                 style={{width: 240}}z
                //                 cover={<img alt="example" src={`http://192.168.1.202:3333${file.filepath}`}/>}
                //             >
                //             <Meta title={file.classification}/>
                //             </Card>
                //
                //     if file.classification
                //     normalImages.push()
                //
                // }
                // const contentList = {
                //     tab1: <p>content1</p>,
                //     tab2: <p>content2</p>,
                // };
            })
            .catch(err=>{
            });
    };

    render() {

        return (
            <Card tabList={this.state.tabList} activeTabKey={this.state.key} onTabChange={key => { this.onTabChange(key, 'key'); }}>
                <Row gutter={12}>

                    <Card style={{width: '100%',
                        textAlign: 'center'}} loading={true}>
                        <Meta/>
                    </Card>

                </Row>
            </Card>
        );
    }
}

export default ImageResults;
