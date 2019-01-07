const libraryList = [
    {name: 'React', count: 0},
    {name: 'Vue', count: 0},
    {name: 'Angular', count: 0},
    {name: 'Ember', count: 0}
]

const Header = (props) => {
    return React.createElement('h1', { className: 'mb-4' }, 
    'Vote Your JS Library!');
};

const Library = (props) => {
    let library = props['library'], count = props['count'];
    return React.createElement('div', { className: 'row border my-2 py-3' },
    [
        
        React.createElement('div', { className: 'col-md-2'}, 
            React.createElement('h4', { className: 'mb-0 mt-1' }, library['count'])),
        React.createElement('div', { className: 'col' }, 
            React.createElement('h4', { className: 'mb-0 mt-1' }, library['name'])),
        React.createElement('div', { className: 'col-md-2 text-center' },
            React.createElement('button', 
            { 
                className: 'btn btn-success addBtn',
                id: count,
            }, '+'))
    ]);
};

const Libraries = (props) => {
    let list = [];
    for (var i=0; i<libraryList.length; i++) {
        list.push(Library({ library: libraryList[i], count: i }));
    };

    return React.createElement('div', { className: 'row px-5' }, 
        [
            React.createElement('div', { className: 'col-3' }),
            React.createElement('div', { className: 'col text-center' }, list),
            React.createElement('div', { className: 'col-3' })
        ]);
};

ReactDOM.render([Header(), Libraries()], document.getElementById('app'));

$('.addBtn').on('click', function(event) {
    event.preventDefault();
    let btnId = $(this)[0]['id'];
    libraryList[btnId]['count'] += 1;
    
    ReactDOM.render([Header(), Libraries()], document.getElementById('app'));
});