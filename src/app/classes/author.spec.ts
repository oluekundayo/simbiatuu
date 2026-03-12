import { Author } from './author';

describe('Author', () => {
  it('should accept a valid author shape', () => {
    const author: Author = {
      image: 'avatar.jpg',
      name: 'Test Author',
      bio: 'Short bio',
    };

    expect(author.name).toBe('Test Author');
  });
});
