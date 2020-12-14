import React, { Component } from 'react';
import $ from "jquery";

class home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chatToggleOn: true,
        }
    }

    componentDidUpdate(){
        $(".button_chatlist").animate({ scrollTop: $('.button_chatlist').prop("scrollHeight") }, 1000);
    }
    componentDidMount(){
        $(".button_chatlist").animate({ scrollTop: $('.button_chatlist').prop("scrollHeight") }, 1000);
    }
    render() {
        const { chatToggleOn } = this.state;
        return (
            <div className="main-container">
                <div classNameName="App">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container">
                                <a className="navbar-brand" href="#"><img src="./images/logo-guise.png" alt=""/></a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item active">
                                            <a className="nav-link" ><i className="fa fa-user"></i> Admin</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <section className="traffic-section">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-12 col-md-8">
                                        <div className="dashboard-box" id="video-container">
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4">
                                        <div className="thumbnail-header">
                                            <h3>Vehicle Events</h3>
                                        </div>
                                        <div className="thumbnail-wrap">
                                            <div className="video-thumbnail" data-toggle="modal" data-target="#vechile-info">
                                                <div className="vid_avatar">
                                                    <img src="https://via.placeholder.com/400x100?text=one" alt=""/>
                                                </div>
                                                <div className="vid_details">
                                                    <div className="detail-wrap">
                                                        <div className="vechile-text">
                                                            <h3 className="title">Plate Number</h3>
                                                            <p>DL04YD343</p>
                                                        </div>
                                                        <div className="vechile-text">
                                                            <h3 className="title">Device Name</h3>
                                                            <p>Lorem Ipsum Ammet</p>
                                                        </div>
                                                    </div>
                                                    <div className="vechile-text">
                                                        <h3 className="title"><i className="fa fa-clock-o"></i> Event Time</h3>
                                                        <p>9th January 2020, 4:36:36 PM</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="video-thumbnail" data-toggle="modal" data-target="#vechile-info">
                                                <div className="vid_avatar">
                                                    <img src="https://via.placeholder.com/400x100?text=two" alt=""/>
                                                </div>
                                                <div className="vid_details">
                                                    <div className="detail-wrap">
                                                        <div className="vechile-text">
                                                            <h3 className="title">Plate Number</h3>
                                                            <p>DL04YD343</p>
                                                        </div>
                                                        <div className="vechile-text">
                                                            <h3 className="title">Device Name</h3>
                                                            <p>Lorem Ipsum Ammet</p>
                                                        </div>
                                                    </div>
                                                    <div className="vechile-text">
                                                        <h3 className="title"><i className="fa fa-clock-o"></i> Event Time</h3>
                                                        <p>9th January 2020, 4:36:36 PM</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="video-thumbnail" data-toggle="modal" data-target="#vechile-info">
                                                <div className="vid_avatar">
                                                    <img src="https://via.placeholder.com/400x100?text=three" alt=""/>
                                                </div>
                                                <div className="vid_details">
                                                    <div className="detail-wrap">
                                                        <div className="vechile-text">
                                                            <h3 className="title">Plate Number</h3>
                                                            <p>DL04YD343</p>
                                                        </div>
                                                        <div className="vechile-text">
                                                            <h3 className="title">Device Name</h3>
                                                            <p>Lorem Ipsum Ammet</p>
                                                        </div>
                                                    </div>
                                                    <div className="vechile-text">
                                                        <h3 className="title"><i className="fa fa-clock-o"></i> Event Time</h3>
                                                        <p>9th January 2020, 4:36:36 PM</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="video-thumbnail" data-toggle="modal" data-target="#vechile-info">
                                                <div className="vid_avatar">
                                                    <img src="https://via.placeholder.com/400x100?text=four" alt=""/>
                                                </div>
                                                <div className="vid_details">
                                                    <div className="detail-wrap">
                                                        <div className="vechile-text">
                                                            <h3 className="title">Plate Number</h3>
                                                            <p>DL04YD343</p>
                                                        </div>
                                                        <div className="vechile-text">
                                                            <h3 className="title">Device Name</h3>
                                                            <p>Lorem Ipsum Ammet</p>
                                                        </div>
                                                    </div>
                                                    <div className="vechile-text">
                                                        <h3 className="title"><i className="fa fa-clock-o"></i> Event Time</h3>
                                                        <p>9th January 2020, 4:36:36 PM</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="video-thumbnail" data-toggle="modal" data-target="#vechile-info">
                                                <div className="vid_avatar">
                                                    <img src="https://via.placeholder.com/400x100?text=five" alt=""/>
                                                </div>
                                                <div className="vid_details">
                                                    <div className="detail-wrap">
                                                        <div className="vechile-text">
                                                            <h3 className="title">Plate Number</h3>
                                                            <p>DL04YD343</p>
                                                        </div>
                                                        <div className="vechile-text">
                                                            <h3 className="title">Device Name</h3>
                                                            <p>Lorem Ipsum Ammet</p>
                                                        </div>
                                                    </div>
                                                    <div className="vechile-text">
                                                        <h3 className="title"><i className="fa fa-clock-o"></i> Event Time</h3>
                                                        <p>9th January 2020, 4:36:36 PM</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="video-thumbnail" data-toggle="modal" data-target="#vechile-info">
                                                <div className="vid_avatar">
                                                    <img src="https://via.placeholder.com/400x100?text=six" alt=""/>
                                                </div>
                                                <div className="vid_details">
                                                    <div className="detail-wrap">
                                                        <div className="vechile-text">
                                                            <h3 className="title">Plate Number</h3>
                                                            <p>DL04YD343</p>
                                                        </div>
                                                        <div className="vechile-text">
                                                            <h3 className="title">Device Name</h3>
                                                            <p>Lorem Ipsum Ammet</p>
                                                        </div>
                                                    </div>
                                                    <div className="vechile-text">
                                                        <h3 className="title"><i className="fa fa-clock-o"></i> Event Time</h3>
                                                        <p>9th January 2020, 4:36:36 PM</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="video-thumbnail" data-toggle="modal" data-target="#vechile-info">
                                                <div className="vid_avatar">
                                                    <img src="https://via.placeholder.com/400x100?text=seven" alt=""/>
                                                </div>
                                                <div className="vid_details">
                                                    <div className="detail-wrap">
                                                        <div className="vechile-text">
                                                            <h3 className="title">Plate Number</h3>
                                                            <p>DL04YD343</p>
                                                        </div>
                                                        <div className="vechile-text">
                                                            <h3 className="title">Device Name</h3>
                                                            <p>Lorem Ipsum Ammet</p>
                                                        </div>
                                                    </div>
                                                    <div className="vechile-text">
                                                        <h3 className="title"><i className="fa fa-clock-o"></i> Event Time</h3>
                                                        <p>9th January 2020, 4:36:36 PM</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="modal fade" id="vechile-info" tabindex="-1" role="dialog" aria-labelledby="vechile-info"
                            aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLongTitle">Vehicle Info</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="vechile-card">
                                            <div className="row">
                                                <div className="col">
                                                    <div className="vechile-text">
                                                        <h3>Number Plate</h3>
                                                        <p>DL07YD8938</p>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="vechile-text">
                                                        <h3>Date</h3>
                                                        <p>12-02-2020 08:45:36 PM</p>
                                                    </div>
                                                </div> 
                                                <div className="col text-right">
                                                    <button type="button" className="btn btn-info" id="zoom-in"><i
                                                            className="fa fa-search-plus"></i></button>
                                                    <button type="button" className="btn btn-info" id="zoom-out"><i
                                                            className="fa fa-search-minus"></i></button>
                                                    <button type="button" className="btn btn-info" id="reset"><i
                                                            className="fa fa-repeat"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="vechile_img">
                                        <img src="https://www.tutorialshubspot.com/wp-content/uploads/2017/05/CAR-6-1.jpg" alt=""/>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
};



export default (home);