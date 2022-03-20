import React from 'react';
import TaskList from './TaskList';
import { render, screen } from '../../test';

describe("TaskList", () => {
    it("displays one transaction's data correclty", () => {

        const testState = {
            tasks: {
                entities: [
                    {
                        id: 1,
                        text: "Laundry",
                        priority: 3,
                        notes: "These are notes",
                        dateCreated: "3/17/22 9:34 PM"
                    }
                ]
            }
        }

        render(<TaskList />, { preloadedState: testState })
    })
})
