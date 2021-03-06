# My spin-out from the next.js learning sample

You can view the result of this sample at https://hello-next.jaysealearn.now.sh/

## Getting Started

To learn about Next.js yourself, follow along in https://nextjs.org/learn/basics/getting-started/setup.
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Next.js works with Windows, Mac and Linux alike. You only need to have Node.js installed on your system to begin building Next.js applications. Besides that you need to have a text editor to write code, and a Terminal application to invoke some commands.
```
If you are on Windows, try to use PowerShell. 
Next.js works with any shell or terminal, but we'll be using some UNIX-specific commands in this guide.
We recommend using PowerShell to make it easy to follow along.
```

### Installing

To start, create a sample project by running the following commands:
```
mkdir hello-next
cd hello-next
npm init -y
npm install --save react react-dom next
mkdir pages
```

Then open the package.json file in the hello-next directory and replace scripts with the following:
```
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
}
```

Now everything is ready. Run the following command to start the dev server:
```
npm run dev
```

Then open http://localhost:3000 from your favourite browser.

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc

