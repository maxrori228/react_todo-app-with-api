import classNames from 'classnames';
import React from 'react';
import { Todo } from '../../types/Todo';
import { FILTERS } from '../../types/enums';

type Props = {
  todos: Todo[];
  items: Todo[];
  filter: FILTERS;
  setFilter: React.Dispatch<React.SetStateAction<FILTERS>>;
  handleDeleteCompleteTodo: () => void;
};

const FooterComponent: React.FC<Props> = ({
  todos,
  items,
  filter,
  setFilter,
  handleDeleteCompleteTodo,
}) => {
  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {items.length} items left
      </span>

      <nav className="filter" data-cy="Filter">
        <a
          href="#/"
          className={classNames('filter__link', {
            selected: filter === FILTERS.all,
          })}
          data-cy="FilterLinkAll"
          onClick={() => setFilter(FILTERS.all)}
        >
          All
        </a>

        <a
          href="#/active"
          className={classNames('filter__link', {
            selected: filter === FILTERS.active,
          })}
          data-cy="FilterLinkActive"
          onClick={() => setFilter(FILTERS.active)}
        >
          Active
        </a>

        <a
          href="#/completed"
          className={classNames('filter__link', {
            selected: filter === FILTERS.completed,
          })}
          data-cy="FilterLinkCompleted"
          onClick={() => setFilter(FILTERS.completed)}
        >
          Completed
        </a>
      </nav>

      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
        onClick={handleDeleteCompleteTodo}
        disabled={!todos.some(todo => todo.completed)}
      >
        Clear completed
      </button>
    </footer>
  );
};

export const Footer = React.memo(FooterComponent);
