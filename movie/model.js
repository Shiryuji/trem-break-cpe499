const data = [
    { id: 1, title: 'Players', week_in_top: '1', hours_viewed: '28,500,000', runtime:'1:45', views:'16,300,000' },
    { id: 2, title: 'Lover,Stalker,Killer', week_in_top: '2', hours_viewed: '21,900,000', runtime:'1:31', views:'14,400,000' },
    { id: 3, title: 'Despicable Me 3', week_in_top: '2', hours_viewed: '15,900,000', runtime:'1:30', views:'10,600,000' },
    { id: 4, title: 'Einstein and the Bomb', week_in_top: '1', hours_viewed: '10,900,000', runtime:'1:17', views:'8,500,000' },
    { id: 5, title: 'Minions', week_in_top: '5', hours_viewed: '10,700,000', runtime:'1:31', views:'7,100,000' },
    { id: 6, title: 'Orion and the Dark', week_in_top: '3', hours_viewed: '10,800,000', runtime:'1:33', views:'7,000,000' },
    { id: 7, title: 'Despicable Me 2', week_in_top: '13', hours_viewed: '10,000,000', runtime:'1:38', views:'6,100,000' },
    { id: 8, title: 'Despicable Me', week_in_top: '6', hours_viewed: '7,300,000', runtime:'1:35', views:'4,600,000' },
    { id: 9, title: 'American Assassin', week_in_top: '3', hours_viewed: '6,500,000', runtime:'1:52', views:'3,500,000' },
    { id: 10, title: 'The Devil Wears Prada', week_in_top: '2', hours_viewed: '6,200,000', runtime:'1:49', views:'3,400,000' },
    
];

function getAll() {
    return Promise.resolve(data);
}

module.exports = getAll;