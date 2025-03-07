export const cn = jest.fn((...args) => args.filter(Boolean).join(' '));
