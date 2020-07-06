import React from 'react'
import ListComponent from './ListComponent'

export default class UserLists extends React.Component {

  state = {
    lists: [],
    loading: true
  }

  async componentDidMount() {

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    config.headers['Authorization'] = 'Token f900831a302ab00b4b9dfd243f5409cab032caee';

    var url = 'http://127.0.0.1:8000/list/';
    const response = await fetch(url, config);
    const data = await response.json();
    this.setState({ lists: data, loading: false })
  }

  render() {
    const listApi = this.state.lists;
    return (
      <div>
        {listApi.map(list => <ListComponent key={list.id}
          listName={list.name}
          items={list.item_set} />)}
      </div>
    )
  }
}