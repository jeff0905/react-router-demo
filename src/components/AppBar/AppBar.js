/**
 * AppBar.
 * - element
 *   1. Container
 *   2. Navigation Icon( menu icon,back arrow, up arrow)
 *   3. Title
 *   4. Action items
 *   5. overflow menu.
 * - bar
 *   1. Prominent
 *   2. Dense (desktop only).
 *   3. images in bar
 */
import React from 'react';

const AppBar = (props) => (
    <header class="mdc-top-app-bar">
        <div class="mdc-top-app-bar__row">
            <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            <a href="#" class="material-icons mdc-top-app-bar__navigation-icon">menu</a>
            <span class="mdc-top-app-bar__title">Title</span>
            </section>
        </div>
    </header>
)

export default AppBar;