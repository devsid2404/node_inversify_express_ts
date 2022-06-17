import 'reflect-metadata';
import { Container } from "inversify";
import CommonUtils from '../../src/common/common.util';
import Symbols from '../../src/Symbols';





describe('Common util methods', () => {
    const container = new Container({ defaultScope: 'Singleton'});
    let commonUtils: CommonUtils;

    container.bind<CommonUtils>(Symbols.CommonUtils)
        .to(CommonUtils);

    commonUtils = container.get(Symbols.CommonUtils);

    describe('Get search array', () => {

        it('Should return array of word for given string value', async () => {
            const result1 = commonUtils.getSearchArray(' some value ');
            expect(result1).toStrictEqual(['some','value']);

            // will trim lower case and give value array of string
            const result2 = commonUtils.getSearchArray(' the Lion king ');
            expect(result2).toStrictEqual(['the','lion', 'king']);
        });

        it('Should only one element in string if given in " "', async () => {
            const result1 = commonUtils.getSearchArray('"some value"');
            expect(result1).toStrictEqual(['some value']);

            // will trim lower case and return just one element in array with string value
            const result2 = commonUtils.getSearchArray('"The Lion KIng "');
            expect(result2).toStrictEqual(['the lion king']);
        });
    });

    describe('Sort Array Of Objects', () => {

        // ascending sort
        it('Should return ascending sorted array of objects for given property name', async () => {
            const result1 = commonUtils.sortArrayOfObjects([
                {
                    name: 'sid'
                },
                {
                    name: 'vic'
                },
                {
                    name: 'omi'
                }
            ], 'name');
            expect(result1).toStrictEqual([
                {
                    name: 'omi'
                },
                {
                    name: 'sid'
                },
                {
                    name: 'vic'
                }
            ]);

            const result2 = commonUtils.sortArrayOfObjects([
                {
                    id: 10,
                    name: 'sid'
                },
                {
                    id: 5,
                    name: 'vic'
                },
                {
                    id: 7,
                    name: 'omi'
                }
            ], 'id');
            expect(result2).toStrictEqual([
                {
                    id: 5,
                    name: 'vic'
                },
                {
                    id: 7,
                    name: 'omi'
                },
                {
                    id: 10,
                    name: 'sid'
                },
            ]);
        });

        // descending sort
        it('Should return descending sorted array of objects for given property name', async () => {
            const result1 = commonUtils.sortArrayOfObjects([
                {
                    name: 'sid'
                },
                {
                    name: 'vic'
                },
                {
                    name: 'omi'
                }
            ], '-name');
            expect(result1).toStrictEqual([
                {
                    name: 'vic'
                },
                {
                    name: 'sid'
                },
                {
                    name: 'omi'
                },
            ]);

            const result2 = commonUtils.sortArrayOfObjects([
                {
                    id: 10,
                    name: 'sid'
                },
                {
                    id: 5,
                    name: 'vic'
                },
                {
                    id: 7,
                    name: 'omi'
                }
            ], '-id');
            expect(result2).toStrictEqual([
                {
                    id: 10,
                    name: 'sid'
                },
                {
                    id: 7,
                    name: 'omi'
                },
                {
                    id: 5,
                    name: 'vic'
                }, 
            ]);
        });
    });



});