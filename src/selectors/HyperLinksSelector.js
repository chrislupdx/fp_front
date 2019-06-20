export const getHyperLinksState = state => state.hyperlinks;

export const getHyperLinksList = state => getHyperLinksState(state).hyperlinkList;
export const getHyperLinksLoading = state => getHyperLinksState(state).loading;
export const getHyperLinksError = state => getHyperLinksState(state).error;
