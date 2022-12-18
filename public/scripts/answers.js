const all_answers = document.getElementsByClassName("answer_count");

const num_answers = count_answers();

color_answers();


function count_answers() {
  let answer_count = 0;

  for (let i = 0; i < all_answers.length; i++) { 
    answer_count += get_count(all_answers[i]);
  }

  return answer_count;
}

function color_answers() {
  for (let i = 0; i < all_answers.length; i++) { 
    const count = get_count(all_answers[i]);
    const div = all_answers[i].getElementsByClassName("percentage")[0];
   
    if (num_answers > 0) { 
      div.style.display = "block";
      div.style.width = (count / num_answers * 100) + "%";
    }
  }



}

function get_count(answer) {
  return parseInt(answer.getElementsByTagName("span")[0].innerText);
}