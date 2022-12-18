const answers = document.querySelector('.answers');

document
  .querySelector('.newAnswer')
  .addEventListener('click', () => { 
    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'answers';
    input.className = 'input';
    input.placeholder = newAnswer();

    const remove = document.createElement('a');
    remove.href = '#';
    remove.className = 'inlineBtn removeAnswer';
    remove.innerHTML = '&times';

    remove.addEventListener('click', removeAnswer);

    const answer = document.createElement('div');
    answer.className = 'answer';

    answer.appendChild(input);
    answer.appendChild(remove);

    answers.appendChild(answer);
  });

function removeAnswer() {
  this.parentElement.remove();
}

function newAnswer() {
  const answersCount = document.querySelectorAll('.answer').length;

  const texts = [
    'A whole new answer, just for you!',
    'Ok, you can give me the "correct" answer now.',
    'I think it\'s time for a tricky one.',
    'You are very open minded person, I see',
    'Another one, uh? Ok, I guess.',
    'You are really liking to create these, aren\'t you?',
    'Don\'t think people may started confused with this survey...?',
  ]
  
  if (answersCount < texts.length) {
    return texts[answersCount];
  }

  return 'Ok, you\'ve won. You wanted a new answer, you got it.'
}

