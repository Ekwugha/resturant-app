// import React from 'react';
// import DataTable from 'react-data-table-component';


// const columns = [
//     {
//         name: 'Title',
//         selector: row => row.title,
//     },
//     {
//         name: 'Year',
//         selector: row => row.year,
//     },
// ];

// const data = [
//     {
//         id: 1,
//         title: 'Beetlejuice',
//         year: '1988',
//     },
//     {
//         id: 2,
//         title: 'Ghostbusters',
//         year: '1984',
//     },
// ]

// export default function OrderPage() {
// 	const [filterText, setFilterText] = React.useState('');
// 	const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
// 	const filteredItems = fakeUsers.filter(
// 		item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
// 	);

// 	const subHeaderComponentMemo = React.useMemo(() => {
// 		const handleClear = () => {
// 			if (filterText) {
// 				setResetPaginationToggle(!resetPaginationToggle);
// 				setFilterText('');
// 			}
// 		};

// 		return (
// 			<FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
// 		);
// 	}, [filterText, resetPaginationToggle]);

// 	return (
// 		<DataTable
// 			title="Contact List"
// 			columns={columns}
// 			data={filteredItems}
// 			pagination
// 			paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
// 			subHeader
// 			subHeaderComponent={subHeaderComponentMemo}
// 			selectableRows
// 			persistTableHead
// 		/>
// 	);
// }
