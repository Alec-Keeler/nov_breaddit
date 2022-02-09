// Task 24b
console.log('hello from front end')

const deleteBtns = document.querySelectorAll('.delete-btn')

for (let i = 0; i < deleteBtns.length; i++) {
    const btn = deleteBtns[i];
    // Task 24c
    btn.addEventListener('click', async(e) => {
        e.preventDefault()
        const postId = e.target.id
        console.log(postId)
        const res = await fetch(`/posts/${postId}`, {
            method: 'DELETE'
        })

        // Task 24e
        const data = await res.json()
        console.log(data)

        if (data.message === "Success") {
            const container = document.querySelector(`#post-container-${postId}`)
            container.remove()
        } else {
            
        }
    })
}