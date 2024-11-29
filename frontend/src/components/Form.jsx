import React from 'react';
import FormChild from './FormChild';
export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            btnDisabled: false,
        }
        this.inputRef = React.createRef();
    }
    componentDidMount() {
        // console.log('From mounted', this.props);
    }
    componentDidUpdate(prevProps, prevState) {
        // console.log('From updated', this.state, prevProps);
    
    }
    componentWillUnmount() {
        // console.log('From unmounted', this.state);
    }

    inputValueValidate(value) {
        // Проверяем значение на наличие слова "реакт"
        if (/реакт/i.test(value)) {
          return { btnDisabled: true };
        } else {
          return { btnDisabled: false };
        }
      }
    
    handleChange = (e) => {
        const value = e.target.value;
        const validation = this.inputValueValidate(value);
    
        // Обновляем состояние: и inputValue, и btnDisabled в одном setState
        this.setState({
          inputValue: value,
          ...validation, // добавляем результат валидации (btnDisabled)
        });
      };
    handleClick() {
        this.inputRef.current.focus();
    }
    render() {
        return (
            <form>
                <label>
                    Name:
                    <input 
                    type="text" 
                    name="name" 
                    value={this.state.inputValue} 
                    onChange={this.handleChange} 
                    ref={this.inputRef}
                    />
                </label>
                <input type="submit" value="Submit" />
              
                    <button disabled={this.state.btnDisabled} onClick={() => {
                        this.setState({name: ''})
                        this.handleClick()
                    }
                       
                        } type="reset">Reset</button>
                
                <FormChild  childProps={this.props.params}/>
            </form>
        );
    }
}