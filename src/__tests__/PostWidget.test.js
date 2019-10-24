import React from 'react'
import {render} from '@testing-library/react'
import PostWidget from '../components/PostWidget'
import {MemoryRouter} from 'react-router-dom'
import {shortenText} from '../utils/functions'
import {posts} from './__data__/testData'

let longPost = posts[0]
let post =  posts[1]

it('Does text contain post text', () => {
    const {container} = render(
        <MemoryRouter>
            <PostWidget {...post}/>
        </MemoryRouter>)
    expect(container.textContent).toContain(post.text)
})

it('Does PostWidget shorten text longer than 100', () => {
    const {container} = render(
        <MemoryRouter>
            <PostWidget {...longPost}/>
        </MemoryRouter>
    )
    expect(container.textContent).toContain(shortenText(longPost.text))
})

it('Shows all text when expanded', () => {
    const { container } = render(
      <MemoryRouter>
        <PostWidget expanded={true} {...longPost} />
      </MemoryRouter>,
    );
  
    expect(container.textContent).toContain(longPost.text);
  });