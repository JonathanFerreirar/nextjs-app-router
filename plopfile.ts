import { NodePlopAPI } from 'plop';

export default function plopConfig(plop: NodePlopAPI) {
    plop.setGenerator('component', {
        description: 'component on components folder',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'type the component name',
                filter(input: string) {
                    return input.charAt(0).toUpperCase() + input.slice(1);
                },
            },
        ],
        actions: [
            {
                type: 'addMany',
                destination: 'src/components/{{name}}',
                templateFiles: './plop_templates/components/*.hbs',
                base: './plop_templates/components',
            },
        ],
    });

    plop.setGenerator('component by path', {
        description: 'create component structure with diferent path',
        prompts: [
            {
                type: 'input',
                name: 'path',
                message: 'type the component path',
                filter(input: string) {
                    return input.charAt(0).toUpperCase() + input.slice(1);
                },
            },
            {
                type: 'input',
                name: 'name',
                message: 'type the component name',
                filter(input: string) {
                    return input.charAt(0).toUpperCase() + input.slice(1);
                },
            },
        ],
        actions: [
            {
                type: 'addMany',
                destination: 'src/components/{{path}}/{{name}}',
                templateFiles: './plop_templates/components/*.hbs',
                base: './plop_templates/components',
            },
        ],
    });
}
