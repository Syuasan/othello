
/*
 * GET home page.
 */

exports.index = function(req, res){
    res.render('index', { title: 'Othello',
                          p1name: 'player1',
                          p2name: 'player2'
                        });
};
