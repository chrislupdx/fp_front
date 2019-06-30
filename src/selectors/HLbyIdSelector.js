export const HyperLinkByIDState = state => state.hyperlinks;

export const HyperLinkByID = state => HyperLinkByIDState(state).hyperlink;
export const HyperLinkByIDName = state => HyperLinkByIDState(state).hyperlink.name;
export const HyperLinkByIDURL = state => HyperLinkByIDState(state).hyperlink.url;
