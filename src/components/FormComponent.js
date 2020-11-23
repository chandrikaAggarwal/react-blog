import React, { Component } from 'react';

class FormPractise extends Component {

    state = {
        value: 'Chandrika',
        textarea: 'this is textarea',
        selectValue: 'val2'
    }

    handleSubmit = (e) => {
        console.log(this.state);
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>Forms</h1>
                <div className="p-2 d-flex flex-row">
                    <div className="w-50 border p-2">
                        <form onSubmit={this.handleSubmit}>
                            <div className="p-2 form-group">
                                <label>Textbox:</label> <input className="form-control" type="text" value={this.state.value} onChange={(e) => this.setState({ value: e.target.value })} />
                            </div>
                            <div className="p-2 form-group">
                                <label>Textarea:</label> <textarea className="form-control" value={this.state.textarea} onChange={(e) => this.setState({ textarea: e.target.value })} />
                            </div>
                            <div className="p-2 form-group">
                                <label>Select:</label> <select className="form-control" value={this.state.selectValue} onChange={(e) => this.setState({ selectValue: e.target.value })} >
                                    <option value="val1">Opt1</option>
                                    <option value="val2">Opt2</option>
                                    <option value="val3">Opt3</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <div className="w-50 border p-2">

                    </div>
                </div>
            </div>
        );
    }
}

export default FormPractise;