import React from 'react';
import TaskList from './TaskList';
import { render } from '../../test';
import { screen } from '@testing-library/dom';

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

        const listItem = screen.getByRole('listitem');
        expect(listItem).toHaveTextContent(/Laundry 3/i);
    })
})
