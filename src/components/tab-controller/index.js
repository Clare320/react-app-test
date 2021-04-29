import React, { Component } from 'react';
import AController from './a-controller';
import BController from './b-controller';
import styles from './index.module.css';

export default class TabController extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             controllers: [ 
                AController,
                BController
             ],
             index: 0
        }
    }

    onTabClick = (index) => {
        this.setState({
            index
        });
    }
    
    render() {
        const { index, controllers } = this.state;
        return (
            <div className={styles.container}>
                <div className={styles.tab}>
                    <div className={styles.tabItem} onClick={this.onTabClick.bind(this, 0)}>A</div>
                    <div className={styles.tabItem} onClick={this.onTabClick.bind(this, 1)}>B</div>
                </div>
                <div className={styles.content}>
                    {
                        controllers.map((item, itemIndex) => {
                         const Comp = item;
                            const visibility = index === itemIndex ? 'visible' : 'hidden';
                           return <div className={styles.child} style={{ visibility }}>
                                    <Comp {...this.props} />
                                </div>
                        })
                    }    
                </div> 
            </div>
        )
    }
}
