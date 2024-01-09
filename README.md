# Payouts V2 Assignment Submission

Heyy there :wave:

This is my submission for Dukaan's React Assignment. It is available on https://payouts-v2-adarsh.vercel.app/

You can find the origin tweet by [Subhash Choudhary](https://twitter.com/subhashchy) here: https://twitter.com/subhashchy/status/1744308069751025894?t=C7yCq9Fvd_UIWVVpyLlpAw&s=08

## Features

### Design featuers

- **Working sidebar**: The state of the sidebar changes when clicked on a tab.
- **Working transactions search**: The search bar in the transactions table work perfectly fine.
- **Accessible layout**: I have made sure the entier layout is web accessible.
- **Other states**: States like `hover`, `focus`, etc. are also available wherever intuitive.

### Code features

- **Reusable components**: Have created components such as `Button` and `Search` which can be used again wherever required.
  - **Button Component**: Scalable component. Has **variants** option like `primary`, `outline` & `ghost`, **size** options like `normal` & `icon`, **iconPosition** and other features.
  - **Search Component**: Scalable component. Has **variants** options like `nav` & `default` and **size** options like `default` & `sm`. Also handles states.
- **Type saftey**: The code is totally type safe and the use of `any` is strictly avoided.
- **Data from constants folder**: I have kept all the data in `constants` folder and from there I'm getting those data. It makes development easier when we shift from static data to actual data fetching using some API.
- **Folder structure**: I have kept the folder structure standard and clean. It makes development and maintaining the code a lot easier.
    - **Type**: All the types are in `types` folder
    - **Constants**: All the data is in `constants` folder
- **Maintainable**: I have tried developing it keeping real world usage in mind. Example: The transactions' database will contain the date in a specific format. I have used that format and the `Date` javascript object to replicate data fetching from database.

### Other features

- Conventional commit messages
- Proper use of Git

## Tech stack

- NextJS
- TypeScript
- TailwindCSS
> **NOTE**: No component library is used.

---

Made by [Adarsh Dubey](https://twitter.com/inclinedadarsh)

## Thank you!
