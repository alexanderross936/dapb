export default function play(p1, p2){
    p1 = document.getElementById('menu1').value
    p2 = document.getElementById('menu2').value
    console.log(p1)
    console.log(p2)
    let result;
    if(p1 === 'data' && p2 === 'anecdotes'){
      result = 'Data wins!'
    }
    if(p1 === 'data' && p2 === 'personal beliefs'){
      result = 'Data wins!'
    }
    if(p1 === 'data' && p2 === 'data'){
      result = 'It is a tie!'
    }
    if(p1 === 'anecdotes' && p2 === 'personal beliefs'){
      result = 'anecdotes wins!'
    }
    if(p1 === 'anecdotes' && p2 === 'anecdotes'){
      result = `It's a tie!`
    }
    if(p1 === 'anecdotes' && p2 === 'data'){
      result = 'Data wins!'
    }
    if(p1 === 'personal beliefs' && p2 === 'anecdotes'){
      result = 'anecdotes wins!'
    }
    if(p1 === 'personal beliefs' && p2 === 'personal beliefs'){
      result = 'personal beliefs wins!'
    }
    if(p1 === 'personal beliefs' && p2 === 'data'){
      result = 'Data wins!'
    }
  document.getElementById('text').innerHTML = result
  }