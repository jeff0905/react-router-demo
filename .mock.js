const preList = [
    {id: 1, name: '我忙', desp: '我芒果是很好吃的', price: 1.2},
    {id: 2, name: '我忙2', desp: '我芒果是很好吃的', price: 2.2}
]
const proxy = {
    'GET /api/goods': (req, res) => { res.json(preList);},
    'GET /api/goodDetail/:id': (req, res) => {
        const id = req.params.id || '';
        const detail = preList.find(item => item.id === id);
        res.json(detail);
    },
    'POST /api/good/add': (req, res) => {
        
    },
    'POST /api/good/del/:id': () => {}
}

module.exports = proxy;
