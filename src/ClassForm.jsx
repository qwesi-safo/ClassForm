import React, { Component } from 'react';

class ClassForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ClassForm: [
                {
                    name: 'Akosua',
                    description: 'I am a lovely guy who loves to code'
                },
                {
                    name: 'Kwesi',
                    description: 'I am a lovely guy who loves to write'
                },
            ],
            name: '',
            description: ''
        };
    };
    handleChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const newForm = {
            name: this.state.name,
            description: this.state.description
        }
        this.setState({
            ClassForm: [...this.state.ClassForm, newForm],
            name: '',
            description: ''
        })
    };

    render() {
        return (
            <section style={{ margin: '2rem' }}>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name</label>
                        <br />
                        <input type='text' name='name' value={this.state.name} onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label>Description</label>
                        <br />
                        <textarea name='description' value={this.state.description} onChange={this.handleChange}></textarea>
                    </div>
                    <button>Submit</button>
                </form>

                {this.state.ClassForm.map((items, index) => {
                    return (
                        <div key={index}>
                            <h4>Name: {items.name}</h4>
                            <p>{items.description}</p>
                            <hr />
                        </div>
                    )
                })}


            </section>
        );
    }
}

export default ClassForm;
