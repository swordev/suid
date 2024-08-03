import {
  Accessor,
  createMemo,
  createUniqueId as _createUniqueId,
} from "solid-js";

export default function createUniqueId(
  idOverride?: Accessor<string | undefined>
) {
  return createMemo(() => idOverride?.() ?? `suid-${_createUniqueId()}`);
}
