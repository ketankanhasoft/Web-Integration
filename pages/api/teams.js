// created a api endpoint for getting the list of menu items

export default function handler(_, res) {
  try {
    // static menu list (teams)
    const teams = [
      {
        team_id: 1,
        team_title: "Team Go",
        team_title_medium: "Team Go",
        image_url: "Logo-TeamGO_Plan.svg",
        points: {
          gold: 12879,
          rewards: 322,
        },
        progress_bar: {
          total: 1000,
          value: 268,
        },
        groups: {
          total: 5,
          attended: 2,
        },
      },
      {
        team_id: 2,
        team_title: "Team 1",
        team_title_medium: "Team 1",
        image_url: "Teams1.svg",
        points: {
          gold: 15000,
          rewards: 800,
        },
        progress_bar: {
          total: 1000,
          value: 500,
        },
        groups: {
          total: 7,
          attended: 5,
        },
      },
      {
        team_id: 3,
        team_title: "Team 2",
        team_title_medium: "Team 2",
        image_url: "Teams2.svg",
        points: {
          gold: 10000,
          rewards: 600,
        },
        progress_bar: {
          total: 1000,
          value: 500,
        },
        groups: {
          total: 5,
          attended: 3,
        },
      },
      {
        team_id: 4,
        team_title: "Team 3",
        team_title_medium: "Team 3",
        image_url: "Teams3.svg",
        points: {
          gold: 12000,
          rewards: 700,
        },
        progress_bar: {
          total: 1000,
          value: 700,
        },
        groups: {
          total: 5,
          attended: 4,
        },
      },
    ];

    // return result
    res.status(200).json({ status: true, data: teams });
  } catch (error) {
    // error result
    res.status(400).json({ status: false, data: {} });
  }
}
