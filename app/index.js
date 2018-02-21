/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';

// ================================
// START YOUR APP HERE
// ================================


import package1 from 'dependency_issue_p1';
import package2 from 'dependency_issue_p2';
import { plus3 } from 'dependency_issue_utils';

document.body.append(`${package1}     ${package2}   ${plus3(1)}`);