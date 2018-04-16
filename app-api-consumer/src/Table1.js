import BootstrapTable from 'react-bootstrap-table-next';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';


class Table1 extends Component {

	render() {
		const rowEvents = {
		  onClick: (e, row, rowIndex) => {
		   alert(row.name);
		  }
		};

		const employees = this.props.employees;

		const columns = [{
		  dataField: 'id',
		  text: 'ID',
		  sort: true,
		  style: (cell, row, rowIndex, colIndex) => {
		    if (rowIndex % 2 === 0) {
		      return {
		        backgroundColor: '#81c784'
		      };
		    }
		    return {
		      backgroundColor: '#c8e6c9'
		    };
		  }
	    }, {
		  dataField: 'name',
		  text: 'Nombre',
		  filter: textFilter(),
		  sort: true,

		}, {
		  dataField: 'age',
		  text: 'Años',
		  sort: true,
		},{
		  dataField: 'email',
		  text: 'Email',
		  sort: true,
		}];
		const defaultSorted = [{
		  dataField: 'name',
		  order: 'desc'
		}];
		
		const options = {
		  paginationSize: 2,
		  pageStartIndex: 0,
		  // alwaysShowAllBtns: true, // Always show next and previous button
		  // withFirstAndLast: false, // Hide the going to First and Last page button
		  // hideSizePerPage: true, // Hide the sizePerPage dropdown always
		  // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
		  firstPageText: 'First',
		  prePageText: 'Back',
		  nextPageText: 'Next',
		  lastPageText: 'Last',
		  nextPageTitle: 'First page',
		  prePageTitle: 'Pre page',
		  firstPageTitle: 'Next page',
		  lastPageTitle: 'Last page',
		  sizePerPageList: [{
		    text: '5', value: 5
		  }, {
		    text: '10', value: 10
		  }] // A numeric array is also available. the purpose of above example is custom the text
		};
		const CaptionElement = () => <h3 style={{ borderRadius: '0.25em', textAlign: 'center', color: 'purple', border: '1px solid purple', padding: '0.5em' }}>Empleados</h3>;

    return (
      <div> <CaptionElement /> 
       <BootstrapTable keyField='id'
       		
       		data={ employees }
        	columns={ columns }
        	rowEvents={ rowEvents}
        	striped
  			hover
  			condensed
  			filter={ filterFactory()}
  			defaultSorted={ defaultSorted }
  			pagination={ paginationFactory(options) }
        />
        </div>
      );
  }
}


export default Table1;