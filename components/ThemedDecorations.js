const React = require('react')

class ThemedDecorations extends React.Component{
  render(){
    let x = this.props.children.map(child=>{
      return React.cloneElement(child, {className: this.props.theme})
    })
    return(
      <div>
        {x}
      </div>
    )
  }
}

module.exports = ThemedDecorations
