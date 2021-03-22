import React from 'react'
import {Component} from 'react'
import {connect} from 'react-redux'
import {Doughnut} from 'react-chartjs-2'

class EventChart extends Component {
render(){
return <div>
    <Doughnut
    data={{
        labels: ['Tentative', 'Confirmed', 'Cancelled', 'Closed'],
        datasets: [
            {
            label: 'Events by Status', 
            data: [
                this.props.tentativeStatus, 
                this.props.confirmedStatus, 
                this.props.cancelledStatus,
                this.props.closedStatus
                    ],
            backgroundColor: [
               '#F5EA69',
               '#69F5A9',
               '#D3386E',
               '#CB6EFF'
            ]
            }
        ]
    }}
    height={400}
    width = {600}
    options= {{maintainAspectRatio: false }}
  
    />

</div>

}
}

const mapStateToProps = ({events}, ownProps) => {
  
    const tentativeStatus= events.filter(event => event.status === "Tentative").length
    const confirmedStatus= events.filter(event => event.status === "Confirmed").length
    const cancelledStatus= events.filter(event => event.status === "Cancelled").length
    const closedStatus= events.filter(event => event.status === "Closed").length
  
    return{tentativeStatus, confirmedStatus, cancelledStatus, closedStatus}
  
}

export default connect(mapStateToProps)(EventChart);