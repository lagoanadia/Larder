import type { Member } from '../types'

interface BottomBarProps {
  members: Member[]
  activeMemberId: string
  onSelectMember: (memberId: string) => void
}

function BottomBar({ members, activeMemberId, onSelectMember }: BottomBarProps) {
  return (
    <footer className="bottom-bar">
      {members.map((member) => (
        <button
          key={member.id}
          type="button"
          title={member.name}
          className={member.id === activeMemberId ? 'member-avatar active' : 'member-avatar'}
          onClick={() => onSelectMember(member.id)}
        >
          {/* Derivamos la inicial del nombre en vez de guardarla en los
              datos — mismo principio de "no dupliques información" que
              ya vimos con lowStockCount. */}
          {member.name.charAt(0).toUpperCase()}
        </button>
      ))}
      <button type="button" className="add-member-button" title="Add member">
        +
      </button>
    </footer>
  )
}

export default BottomBar
