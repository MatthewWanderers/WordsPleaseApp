import React, {Component} from 'react';
import ReactNative, {
  Text,
  View,
  StyleSheet
} from 'react-native';
import TestData from './TestData';
import DisplayDetail from './DisplayDetail';

class DisplayIndex extends Component {
  state = { list: [] };

  componentWillMount() {
    this.setState({list: TestData})
    this.renderList = this.renderList.bind(this)
  }

  renderList() {

    let renderList = []
    let renderSubList = []
    this.state.list.forEach((item, i) => {
      if (i % 4 === 0 && i != 0) {
        renderList.push(renderSubList)
        renderSubList = []
      }

      renderSubList.push(<DisplayDetail style={styles.box} key={item.id} item={item} />)

    })

    renderList.push(renderSubList)

    return renderList
  }

  render() {

    let listButtons = this.renderList();

    return (
      <View style={{flex: 2}}>
        <View style={{ flex: 4, flexDirection: 'row', backgroundColor: '#F7DC6F'}}>
        {listButtons[0]}

        </View>
        <View style={{ flex: 4, flexDirection: 'row', backgroundColor: '#82E0AA'}} >
        {listButtons[1]}

        </View>
      </View>
    )
  }
  // {this.renderList()}

}

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'black',
    borderBottomWidth: 0,
    borderRightWidth: 0,
    flex: 1
  }
});

export default DisplayIndex;
