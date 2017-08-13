function getFirstSelector(selector) {
	return document.querySelector(selector)
}

function nestedTarget() {
	return document.querySelector('#nested .target')
}

function deepestChild() {
	let grandNode = document.querySelector('#grand-node')
	let div = grandNode.querySelectorAll('div')
	return div[div.length-1]
}


function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')
  console.log(rankedLists)

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children
    // console.log(children)

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
      // console.log(children[j].innerHTML)
    }
  }
}