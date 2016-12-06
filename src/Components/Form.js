import React, { Component } from 'react';


class FormComponent extends Component {
  handleSubmit(e){
    if (this.refs.name.value === '' ||
        this.refs.email.value === '' ||
        this.refs.mobile.value === '' ||
        this.refs.skills.value === '' ||
        this.refs.skills.value === ''
      ) {
        alert ('please fill in all fields');
    } else if (this.refs.title.value === '') {
        alert ('please fill in all fields')
    }else if(this.refs.title.value !== '2016'){
      alert ('Thanks for your interest. But we are recruiting only 2016 passed out candidates')
    }else {
      alert ('Thanks for your interest. You will be notified shortly')
    }
    e.preventDefault();
  }
  render() {
    return (
      <div className="Form">
      <form>
        <label className="alignment">Name : </label>
        <span><input type="text" ref="name"/><br /></span>
        <label className="alignment">Email : </label>
        <span><input type="text" ref="email" /><br /></span>
        <label className="alignment">Mobile : </label>
        <span><input type="text" ref="mobile" /><br /></span>
        <label className="alignment">Skills : </label>
        <span><input type="text" ref="skills" /><br /></span>
        <label className="alignmentt">Year Of Pass : <br />(Either B.Tech Or Degree)</label>
        <span><input className="right"type="text" ref="title"/><br /></span>
        <button onClick={this.handleSubmit.bind(this)}>submit</button>
      </form>
      </div>
    );
  }
}

export default FormComponent;
