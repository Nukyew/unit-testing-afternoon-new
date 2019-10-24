import {shortenText} from '../utils/functions'
import {wordCount, attachUserName} from '../../server/utils'
import {shortText, longText, posts, users} from './__data__/testData'

it('Will not alter a string under 100 characters', () => {
    expect(shortenText(shortText)).not.toHaveLength(100)
})

it('Shortens text over 100 characters, adds 3 periods', () => {
    expect(shortenText(longText)).toHaveLength(99)
    expect(shortenText(longText)).not.toContain('...')
})

it('Checks word count to be 233', () => {
    expect(wordCount(posts)).toBe(233)
})

it('Check if displayName exists', () => {
    const result = attachUserName(users, posts)
    expect(result[0]).toHaveProperty('displayName')
})

it('Check if posts with no userid are removed', () => {
    const newPosts = attachUserName(users, posts)
    const deletedPost = posts[5]
    expect(newPosts).not.toContainEqual(deletedPost)
})