import { mockedAppConfig, mockedLaunches } from '../space-api/mocks';
import { CustomRoute } from './custom-route';

export const routes: CustomRoute[] = [
  {
    path: '/app-config',
    method: 'get',
    handler: (req, res) => res.json(mockedAppConfig)
  },
  {
    path: '/launches/:id/details',
    method: 'post',
    handler: (req, res) => {
      const launch = mockedLaunches.find(l => l.id === +req.params['id']);
      if (!launch) { return res.status(404).json(null); }

      launch.details = req.body.details;
      return res.json(launch);
    }
  }
];
