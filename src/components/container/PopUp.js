import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import { sendMovieInfo } from '../../actions/emailAction'
import Axios from 'axios'


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    background: '#333'
  }
}

class PopUp extends Component {
  constructor() {
    super()
 
    this.state = {
      modalIsOpen: false,
      mail: "",
      text: ""
    };
 
    this.openModal = this.openModal.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.textHandler = this.textHandler.bind(this)
    this.emailHandler = this.emailHandler.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
 
  openModal() {
    this.setState({modalIsOpen: true})
    console.log(this.props)
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00'
  }
 
  closeModal() {
    this.setState({modalIsOpen: false})
  }

  textHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  emailHandler(event) {
    // const sendEmail = {
    //   mail: this.state.mail,
    //   text: this.state.text
    // }
    // this.props.sendMovieInfo(sendEmail)

    const mail = event.target.value
    this.setState(prev => ({mail}))
  }
  
  handleSubmit() {
    const email = this.state.mail
    const id = this.props.id
    const movieLink = `https://www.themoviedb.org/movie/${id}`

    Axios.post("http://localhost:8080/mail", {email, movieLink})
    this.closeModal()
  }

  render() {
    return (
      <div>
        <button className="btn btn-danger" onClick={this.openModal}>Share</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
 
          <h2 ref={subtitle => this.subtitle = subtitle}>{this.props.title}</h2>
          <form onSubmit={this.emailHandler}>
            <input 
            className="form-group" 
            type="email" 
            placeholder="Email" 
            name="mail" 
            id="clear"
            onChange={event => this.emailHandler(event)}
          />
          </form>

          <button className="btn btn-danger" onClick={this.closeModal} data-dismiss="modal">Close</button>

          <button className="btn btn-danger" type="submit" data-dismiss="modal" onClick={this.handleSubmit}>Send</button>
        </Modal>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  sendEmail: state.sendEmail
})
export default connect(mapStateToProps, { sendMovieInfo })(PopUp)