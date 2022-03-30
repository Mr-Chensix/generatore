import * as _ from 'lodash';
import knownPaths from './known_paths';

const basePath = (generator) => {
  return {
    route: `${knownPaths.PATH_SERVER_FEATURES + generator.feature}/routes/${generator.name}.route`,
    controller: `${knownPaths.PATH_SERVER_FEATURES + generator.feature}/controller/${generator.name}.controller`,
    dao: `${knownPaths.PATH_SERVER_FEATURES + generator.feature}/dao/${generator.name}.dao`,
    model: `${knownPaths.PATH_SERVER_FEATURES + generator.feature}/model/${generator.name}.model`,
    test: `${knownPaths.PATH_SERVER_FEATURES_TEST + generator.feature}/dao/${generator.name}.dao_test`
  }
}

export class NodeStandard {
  constructor(generator) {
    this.wrapper = generator;
  }

  copyFiles() {
    let gen = basePath(this.wrapper);

    this.wrapper.template('node/node/endpoint.route.js', `${gen.route}.js`, {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase()});
    this.wrapper.template('node/node/endpoint.controller.js', `${gen.controller}.js`, {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase()});
    this.wrapper.template('node/node/endpoint.dao.js', `${gen.dao}.js`, {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase()});
    this.wrapper.template('node/node/endpoint.model.js', `${gen.model}.js`, {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase()});

    this.wrapper.template('node/node/endpoint.dao_test.js', `${gen.test}.js`, {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase(), feature: this.wrapper.feature});
  }

  copyForMainGenerator() {
    this.wrapper.directory('server_node', 'server');
    this.wrapper.template('index.js', 'index.js');
  }
}

export class NodeBabel {
  constructor(generator) {
    this.wrapper = generator;
  }

  copyFiles() {
    let gen = basePath(this.wrapper);

    this.wrapper.template('node/babel/endpoint.route.js', `${gen.route}.js`, {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase()});
    this.wrapper.template('node/babel/endpoint.controller.js', `${gen.controller}.js`, {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase()});
    this.wrapper.template('node/babel/endpoint.dao.js', `${gen.dao}.js`, {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase()});
    this.wrapper.template('node/babel/endpoint.model.js', `${gen.model}.js`, {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase()});

    this.wrapper.template('node/babel/endpoint.dao_test.js', `${gen.test}.js`, {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase(), feature: this.wrapper.feature});
  }

  copyForMainGenerator() {
    this.wrapper.directory('server_node_babel', 'server');
    this.wrapper.template('index.js', 'index.js');
  }
}

export class NodeTypescript {
  constructor(generator) {
    this.wrapper = generator;
  }

  copyFiles() {
    let gen = basePath(this.wrapper);

    this.wrapper.template('node/typescript/endpoint.route.ts', `${gen.route}.ts`, {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase()});
    this.wrapper.template('node/typescript/endpoint.controller.ts', `${gen.controller}.ts`, {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase()});
    this.wrapper.template('node/typescript/endpoint.dao.ts', `${gen.dao}.ts`, {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase()});
    this.wrapper.template('node/typescript/endpoint.model.ts', `${gen.model}.ts`, {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase()});

    this.wrapper.template('node/typescript/endpoint.dao_test.ts', `${gen.test}.ts`, {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase(), feature: this.wrapper.feature});
  }

  copyForMainGenerator() {
    this.wrapper.directory('server_node_typescript', 'server');
    this.wrapper.template('index_tsc.js', 'index.js');
  }
}

export class NodeFactory {
  static build(generator) {
    switch(generator.transpilerServer) {
      case "typescript": return new NodeTypescript(generator);
      default: return new NodeBabel(generator);
    }
  }
}
